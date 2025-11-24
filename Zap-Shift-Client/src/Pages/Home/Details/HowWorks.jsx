import truck from "../../../assets/Images/bookingIcon.png";
const HowWorks = () => {
  const Datas = [
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
    <div className="my-10">
      <h3>How It Works</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 iems-center gap-5">
        {Datas.map((data, i) => (
          <div key={i} className="card w-70 bg-base-100 card-md shadow-sm">
            <img src={truck} className="max-h-14 w-14" alt="" />
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
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
