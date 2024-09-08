import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";

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
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            descripiton={item.descripiton}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
