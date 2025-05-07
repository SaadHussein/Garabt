import Category from "./Category";

const CategoryList = () => {
  return (
    <div className="max-w-[1365px] mx-auto w-full my-5 px-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Choose a Category</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <Category index={0} title={"Automatives"} />
          <Category index={1} title={"Beauty & Health Clinics"} />
          <Category index={2} title={"Beauty Salons"} />
          <Category index={3} title={"Cafes"} />
          <Category index={4} title={"Consumer Goods"} />
          <Category index={5} title={"Electronics"} />
          <Category index={6} title={"Entertainment"} />
          <Category index={7} title={"Fashion"} />
          <Category index={8} title={"Finance"} />
          <Category index={9} title={"Fitness & Sports"} />
          <Category index={10} title={"Home Appliances"} />
          <Category index={11} title={"Hospitals & Clinics"} />
          <Category index={12} title={"Hotels & Tourism"} />
          <Category index={13} title={"Insurance"} />
          <Category index={14} title={"Schools"} />
          <Category index={15} title={"Universities"} />
          <Category index={16} title={"Kindergartens & Nurseries"} />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
