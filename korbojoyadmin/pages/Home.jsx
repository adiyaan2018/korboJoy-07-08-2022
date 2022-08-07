import useScript from "../commonFunction/ReloadJs";
export default function Home() {
  useScript("/assets/js/app.js");
  return (
    <div>
      Dashboard
    </div>
  );
}
