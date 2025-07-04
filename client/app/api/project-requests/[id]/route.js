import { NextResponse } from 'next/server';
import { updateProjectRequest } from '@/lib/storage';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function PUT(request, { params }) {
  try {
    const token = getTokenFromRequest(request.headers.get('authorization'));
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const updatedProject = updateProjectRequest(params.id, data);
    
    if (!updatedProject) {
      return NextResponse.json({ error: 'Project request not found' }, { status: 404 });
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project request' }, { status: 500 });
  }
}