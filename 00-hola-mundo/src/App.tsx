import { Button } from "./Button";

const users = [
  {
    name: "John Doe",
    username: "johndoe",
    clicked: true,
  },
  {
    name: "Jane Smith",
    username: "janes",
    clicked: false,
  },
  {
    name: "Jane",
    username: "janes",
    clicked: true,
  },
];

export function App() {
  return (
    <div>
      {
        users.map(({ clicked, name }) => (
          <Button key={name} clicked={clicked} />
        ))
      }
    </div>
  );
}
