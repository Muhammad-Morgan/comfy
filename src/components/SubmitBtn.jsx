import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text,size }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`btn py-6 text-md tracking-wider btn-primary btn-block uppercase ${size}`}
      disabled={isSubmitting}
      style={{
        marginTop: `${text === 'place your order' && '2.5rem'}`
      }}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
