import Critters from "./critters"

const Bugs = (props) => {

  const allBugs = props.bugs.map((m,i) => <Critters key={m.id} {...m} /> )
  return (
    <div>
       {allBugs}
    </div>
  );
}

export default Bugs;