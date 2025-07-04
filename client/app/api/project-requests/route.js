import { NextResponse } from 'next/server';
import { getProjectRequests, addProjectRequest } from '@/lib/storage';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(request) {
  try {
    const token = getTokenFromRequest(request.headers.get('authorization'));
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const projectRequests = getProjectRequests();
    return NextResponse.json(projectRequests);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch project requests' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const projectRequest = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    addProjectRequest(projectRequest);
    return NextResponse.json(projectRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project request' }, { status: 500 });
  }
}