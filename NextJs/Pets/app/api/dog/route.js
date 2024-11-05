// api/dog/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const dog_data = { 
    message: '저는 귀여운 강아지입니다.',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_67DC1A4E0B79034000FF0F86796F88A7.jpg'
  };
  return NextResponse.json(dog_data);
}
