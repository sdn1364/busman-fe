const Month = ({ month }: { month: (number | null)[][] }) => {
  return (
    <div className="flex flex-col">
      {month.map((week, index) => (
        <div key={index} className="align-content-end grid grid-cols-7">
          {week.map((day, index) => {
            return (
              <div
                key={index}
                className="border"
                style={{
                  height: screen.availHeight / 6,
                  width: screen.availWidth / 7,
                }}
              >
                {day}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Month;
