import { NextResponse } from "next/server";
import { CategoryEnum } from "@/utils/enums";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { user } = await req.json();
    const startToday = new Date();
    startToday.setUTCHours(0, 0, 0, 0);
    await WordModel.updateMany(
      {
        $and: [
          { user },
          { category: { $ne: CategoryEnum.ONE } },
          { category: { $ne: CategoryEnum.COMPLETED } },
          { movedTo: { $lt: startToday } },
        ],
      },
      {
        movedTo: new Date(),
        category: CategoryEnum.ONE,
      }
    );
    return NextResponse.json({
      status: true,
      message: "Rebuild operation sucessfully completed.",
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
