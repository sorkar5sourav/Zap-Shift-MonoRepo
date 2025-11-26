import truck from "../../../assets/Images/bookingIcon.png";
const HowWorks = () => {
  const datas = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="my-10 md:mx-10 md:mb-20">
      <h3 className="text-4xl font-bold ml-5 mb-10">How It Works</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-5">
        {datas.map((data, i) => (
          <div
            key={i}
            className="card p-10 w-45 h-55 md:w-76 md:h-60 bg-base-100 card-md shadow-sm"
          >
            <img src={truck} className="max-h-14 w-14 hidden md:flex" alt="" />
            <div className="card-body p-0">
              <h2 className="card-title mb-4 md:my-4">{data.title}</h2>
              <p>{data.description}</p>
              <div className="justify-end card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowWorks;
