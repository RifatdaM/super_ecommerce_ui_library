import React from "react";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";
import Card4 from "../Card4/Card4";

const AllCards = () => {
  return (
    <div>
      {/* card 1 */}
      <h1 className="py-10 text-5xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Card 1
      </h1>
      <Card1 />
      {/* card 2 */}
      <h1 className="py-10 text-5xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Card 2
      </h1>
      <Card2 />
      {/* card 3 */}
      <h1 className="py-10 text-5xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Card 3
      </h1>
      <Card3 />
      {/* card 4 */}
      <h1 className="py-10 text-5xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
        Card 4
      </h1>
      <Card4 />
    </div>
  );
};

export default AllCards;
