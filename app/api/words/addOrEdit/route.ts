import { CategoryEnum } from "@/utils/enums";
import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    if (body._id) {
      const doc = await WordModel.findByIdAndUpdate(body._id, body, {
        new: true,
        runValidators: true,
      });
      if (!doc) {
        return NextResponse.json({
          status: false,
          message: "Word with this id doesn't Exist!",
          data: null,
        });
      }
      return NextResponse.json({
        status: true,
        data: doc,
      });
    } else {
      const doc = await WordModel.create({
        ...body,
        category: CategoryEnum.ONE,
      });
      return NextResponse.json({
        status: true,
        data: doc,
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
