import TimezoneSelector from "./TimezoneSelector";
import WeekDisplay from "./weeks/WeekDisplay";

export const HomePage = () => {
  return (
    <>
      <div className="m-8">
        <WeekDisplay />
      </div>
    </>
  );
};

export default HomePage;
