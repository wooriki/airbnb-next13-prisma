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
    label: "Beach",
    icon: TbBeach,
    descripiton: "This property is close to Beach!",
  },
  {
    label: "WindMills",
    icon: GiWindmill,
    descripiton: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    descripiton: "This property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    descripiton: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    descripiton: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    descripiton: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    descripiton: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    descripiton: "This property is has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    descripiton: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    descripiton: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    descripiton: "This property has camping activities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    descripiton: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    descripiton: "This property is in a desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    descripiton: "This property is in the barn!",
  },
  {
    label: "Lux",
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
