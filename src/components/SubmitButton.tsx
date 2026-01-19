import { memo } from "react";

const SubmitButton = (({ onClick }: { onClick: () => void }) => {
        console.log("SubmitButton render");
        return(
            <button 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                type="submit"
                onClick={onClick}
            >
                Thêm người dùng
            </button>
        )
    }
  );
export default memo(SubmitButton);