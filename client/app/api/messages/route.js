import { NextResponse } from 'next/server';
import { getMessages, getMessagesByProjectId, addMessage } from '@/lib/storage';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectRequestId = searchParams.get('projectRequestId');
    
    // Allow public access to messages for chat functionality
    if (projectRequestId) {
      const messages = getMessagesByProjectId(projectRequestId);
      return NextResponse.json(messages);
    }

    // Admin access to all messages
    const token = getTokenFromRequest(request.headers.get('authorization'));
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const messages = getMessages();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const message = {
      id: Date.now().toString(),
      senderId: data.senderId || 'anonymous',
      senderName: data.senderName || 'Anonymous',
      senderRole: data.senderRole || 'client',
      content: data.content,
      timestamp: new Date(),
      projectRequestId: data.projectRequestId
    };

    addMessage(message);
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}