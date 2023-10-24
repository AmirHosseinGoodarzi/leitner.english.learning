import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";
import WordModel from "@/models/wordModel";
import { CategoryEnum } from "@/utils/enums";
import shuffleArray from "@/utils/shuffleArray";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { category, user } = await req.json();

    if (category !== null && category !== undefined) {
      if (category === CategoryEnum.COMPLETED) {
        const filterBody: any = {
          $and: [{ user }, { category }],
        };
        const doc = await WordModel.find(filterBody);
        return NextResponse.json({
          status: true,
          data: doc,
        });
      } else {
        const startToday = new Date();
        startToday.setUTCHours(0, 0, 0, 0);
        const startTomorrow = new Date(startToday);
        startTomorrow.setDate(startTomorrow.getDate() + 1);
        startTomorrow.setUTCHours(0, 0, 0, 0);
        const filterBody: any = {
          $and: [
            { user },
            {
              movedTo: { $gte: startToday, $lt: startTomorrow },
            },
            {
              category: {
                $ne: CategoryEnum.COMPLETED,
              },
            },
          ],
        };
        const docs = await WordModel.find(filterBody);
        const data = shuffleArray(docs);
        return NextResponse.json({
          status: true,
          data,
        });
      }
    }
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: err.message,
    });
  }
}
