import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Dialog } from "./";
import { Button } from "components/Button";
import { text, boolean, number } from "@storybook/addon-knobs/react";

const DialogDemo = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ padding: '20px 40px' }}>
      <Button onClick={() => setOpen(true)}>open Dialog</Button>
      <Dialog
        className={text(
          "className",
          "flex justify-center items-center text-white"
        )}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Button onClick={() => setOpen(false)} type="error">
          close Dialog
        </Button>
      </Dialog>
    </div>
  );
};

;(storiesOf("Components/Dialog", module) as any).addWithJSX(
  "A basic component can be used as dialog",
  () => (
    <div style={{ padding: '20px 40px' }}>
      <Dialog
        className={text(
          "className",
          "flex justify-center items-center w-1/2 h-64"
        )}
        color={text("color", "black")}
        onClose={() => null}
        opacity={number("opacity", 50)}
        open={boolean("open", false)}
      >
        {text("chidren", "Hello World")}
      </Dialog>
    </div>
  )
);

(storiesOf("Components/Dialog/Demo", module) as any).addWithJSX(
  "of Dialog",
  () => <DialogDemo />
);
