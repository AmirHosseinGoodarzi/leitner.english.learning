import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { user } = await req.json();
    const aggregatorOpts = [
      {
        $match: {
          user,
        },
      },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ];
    const result = await WordModel.aggregate(aggregatorOpts).exec();
    return NextResponse.json({ status: true, data: result });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
