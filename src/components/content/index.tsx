import { Fragment } from "react";
import { InfoCard } from "../card";
import { UserType } from "../container/types";

interface Content {
  theme: string;
  data: UserType[];
}

export function Content({ theme, data }: Content) {
  return (
    <div
      className={`container-${theme} m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`}
    >
      {data.map((item) => (
        <Fragment key={item.id}>
          <InfoCard {...item} />
          <br />
        </Fragment>
      ))}
    </div>
  );
}
