// api/dog/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const dog_data = { 
    message: '저는 귀여운 고양이입니다.',
    image: 'http://image.dongascience.com/Photo/2019/09/d2468576cecf1313437de5a883bfa2ed.jpg'
  };
  return NextResponse.json(dog_data);
}
