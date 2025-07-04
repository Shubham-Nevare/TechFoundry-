import { NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123'; // In production, use environment variables

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const token = generateToken({
            userId: '1',
            username: ADMIN_USERNAME,
            role: 'admin'
        });

        return NextResponse.json({ token, user: { username: ADMIN_USERNAME, role: 'admin' } });
    } catch (error) {
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}