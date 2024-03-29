import { Card } from "../../base";
import { tentPrice } from "../info";

export const Tents = ({ count, tents }) => (
  <>
    {count() % 2 === 0 && <Tent count={2} tents={tents} many={count() / 2} />}
    {count() % 3 === 0 && <Tent count={3} tents={tents} many={count() / 3} />}
  </>
);

const Tent = ({ count, tents: [tents, setTents], many }) => {
  // Dynamic classes based on if the tent is selected or not
  const classes = () => {
    let base = "cursor-pointer border-2 transition-[border]";

    if (tents().type === count) {
      base += " border-peach";
    } else {
      base += " border-transparent";
    }

    return base;
  };

  return (
    <Card
      reactive={{
        class: classes,
      }}
      // Set the tent type and count
      on:click={() =>
        setTents((tent) =>
          count === tent.type
            ? {
                type: 0,
                count: 0,
              }
            : {
                type: count,
                count: many,
              },
        )
      }
    >
      <div class="flex items-center justify-between gap-3">
        <p class="text-lg font-medium">{count}-Person Tent</p>
        <p class="text-lg font-medium">
          {tentPrice[count] * many} <span class="text-subtext0">DKK</span>
        </p>
      </div>

      <p class="mt-[-8px]">
        Have our crew set up {many} x {count}-person tent for you.
      </p>
    </Card>
  );
};
