import axios from "axios";
import { load } from "cheerio";
import { IPOS } from "../dtos/Ipos.dto";
import { Ipos } from "../models/ipos";
import { Request, Response } from "express";
import { QueryType } from "../types/queryType";
const url = "https://cdsc.com.np/ipolist";

const getCategoryName = (
  name: string,
): "general_public" | "foreign_employment" | "reserved" | null => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("foreign employment")) {
    return "foreign_employment";
  }
  if (lowerName.includes("general public")) {
    return "general_public";
  }
  if (lowerName.includes("reserved")) {
    return "reserved";
  }
  return null;
};
export async function getIpos(): Promise<IPOS[]> {
  const data: Array<IPOS> = [];
  console.log("void");
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
    });
    const $ = load(html);
    $(".table tbody tr").each((_, ipo) => {
      const tds = $(ipo).find("td");
      const name = $(tds[1]).text().trim();
      const issueManager = $(tds[2]).text().trim();
      const issuedUnit = $(tds[3]).text().trim();
      const openDate = new Date($(tds[7]).text().trim());
      const closeDate = new Date($(tds[8]).text().trim());
      const category = getCategoryName(name);
      console.log(category,"category");
      
      const ipoObj: IPOS = {
        name,
        issueManager,
        issuedUnit,
        closeDate,
        openDate,
        status: "open",
      };
      if (category) {
        ipoObj.category = category;
      }
      data.push(ipoObj);
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function addIpos(
  req: Request<{}, {}, {}, QueryType>,
  res: Response,
) {
  if (req.query.secret === process.env.QUERY_SECRET) {
    try {
      const ipos = await getIpos();
      console.log(ipos);

      const ipoNames = ipos.map((el) => el.name);
      const matchedIpos = await Ipos.find({ name: { $in: ipoNames } });

      const newIpos = ipos.filter(
        (item) => !matchedIpos.some((m) => m.name === item.name),
      );
      if (newIpos.length === 0) {
        console.log("no ipos to register");
        return res.send("no ipos to register");
      }
      console.log(newIpos);
      await Ipos.insertMany(newIpos);
      console.log("succesfully added new ipos");
      return res.send("succesfully added new ipos");
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
