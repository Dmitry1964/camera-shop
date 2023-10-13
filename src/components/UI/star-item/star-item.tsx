

type StarItemProps = {
  star: {
    id: string;
    title: string;
    value: string;
  };
  handleInputFieldChange: (rating : string) => void;
}

const StarItem = ({star, handleInputFieldChange} : StarItemProps): JSX.Element => {
  const {id, title, value} = star;
  return (
    <>
      <input onChange={(evt: {target: {value : string}}) => handleInputFieldChange(evt.target.value)} className="visually-hidden" id={id} name="rate" type="radio" value={value} />
      <label className="rate__label" htmlFor={id} title={title}></label>

    </>
  );
};


export default StarItem;
