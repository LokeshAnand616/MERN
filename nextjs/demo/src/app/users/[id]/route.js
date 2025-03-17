import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;
  return NextResponse.json({ message: 'User details', userId: id });
}
