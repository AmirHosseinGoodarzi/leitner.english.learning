import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { category } = await req.json();
    const startToday = new Date();
    startToday.setUTCHours(0, 0, 0, 0);
    const startTomorrow = new Date(startToday);
    startTomorrow.setDate(startTomorrow.getDate() + 1);
    startTomorrow.setUTCHours(0, 0, 0, 0);
    const filterBody: any = {
      movedTo: { $gte: startToday, $lt: startTomorrow },
    };
    if (category !== null && category !== undefined) {
      filterBody.category = category;
    }
    const doc = await WordModel.find(filterBody);
    return NextResponse.json({
      status: true,
      data: doc,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
