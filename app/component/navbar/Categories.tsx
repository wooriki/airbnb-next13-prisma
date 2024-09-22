"use client";

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "바닷가",
    icon: TbBeach,
    descripiton: "This property is close to Beach!",
  },
  {
    label: "풍차",
    icon: GiWindmill,
    descripiton: "This property has windmills!",
  },
  {
    label: "현대식",
    icon: MdOutlineVilla,
    descripiton: "This property is modern",
  },
  {
    label: "고향느낌",
    icon: TbMountain,
    descripiton: "This property is in the countryside!",
  },
  {
    label: "수영장",
    icon: TbPool,
    descripiton: "This property has a pool!",
  },
  {
    label: "섬 여행",
    icon: GiIsland,
    descripiton: "This property is on an island!",
  },
  {
    label: "호수",
    icon: GiBoatFishing,
    descripiton: "This property is close to a lake!",
  },
  {
    label: "스키",
    icon: FaSkiing,
    descripiton: "This property is has skiing activities!",
  },
  {
    label: "성곽 주변",
    icon: GiCastle,
    descripiton: "This property is in a castle!",
  },
  {
    label: "캠핑",
    icon: GiForestCamp,
    descripiton: "This property has camping activities!",
  },
  {
    label: "설산",
    icon: BsSnow,
    descripiton: "This property has camping activities!",
  },
  {
    label: "동굴",
    icon: GiCaveEntrance,
    descripiton: "This property is in a cave!",
  },
  {
    label: "사막",
    icon: GiCactus,
    descripiton: "This property is in a desert!",
  },
  {
    label: "헛간",
    icon: GiBarn,
    descripiton: "This property is in the barn!",
  },
  {
    label: "광물",
    icon: IoDiamond,
    descripiton: "This property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
