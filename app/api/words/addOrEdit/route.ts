import { CategoryEnum } from "@/utils/enums";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
      //   const doc = await WordModel.findByIdAndUpdate(id, req.body, {
      //     new: true,
      //     runValidators: true,
      //   });
      //   if (!doc) {
      //     return next(new AppError("Word with this id doesn't Exist!", 404));
      //   }
      return NextResponse.json({
        status: true,
        // data: doc,
      });
    } else {
      //   const doc = await WordModel.create({
      //     ...req.body,
      //     category: CategoryEnum.ONE,
      //   });
      return NextResponse.json({
        status: true,
        // data: doc,
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
