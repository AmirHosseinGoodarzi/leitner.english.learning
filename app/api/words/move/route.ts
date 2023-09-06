import { NextResponse } from "next/server";
import { CategoryEnum } from "@/utils/enums";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { _id, isOk, category } = await req.json();
    if (isOk) {
      const newMovedTo = new Date();
      let newCategory = CategoryEnum.ONE;
      switch (category as CategoryEnum) {
        case CategoryEnum.ONE:
          newCategory = CategoryEnum.TWO;
          newMovedTo.setDate(newMovedTo.getDate() + 2);
          break;
        case CategoryEnum.TWO:
          newCategory = CategoryEnum.FOUR;
          newMovedTo.setDate(newMovedTo.getDate() + 4);
          break;
        case CategoryEnum.FOUR:
          newCategory = CategoryEnum.EIGHT;
          newMovedTo.setDate(newMovedTo.getDate() + 8);
          break;
        case CategoryEnum.EIGHT:
          newCategory = CategoryEnum.FIFTEEN;
          newMovedTo.setDate(newMovedTo.getDate() + 15);
          break;
        case CategoryEnum.FIFTEEN:
          newCategory = CategoryEnum.COMPLETED;
          break;
        default:
          break;
      }
      if (newMovedTo && newCategory) {
        await WordModel.findByIdAndUpdate(_id, {
          movedTo: newMovedTo,
          category: newCategory,
        });
      } else {
        return NextResponse.json({
          status: false,
          message: "Error in calculating new fields :(",
        });
      }
    } else {
      const newMovedTo = new Date();
      newMovedTo.setDate(newMovedTo.getDate() + 1);
      await WordModel.findByIdAndUpdate(_id, {
        movedTo: newMovedTo,
        category: CategoryEnum.ONE,
      });
    }
    return NextResponse.json({
      status: true,
      message: "The word moved successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
