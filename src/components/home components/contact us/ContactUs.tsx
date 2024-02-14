import { TextField } from "@mui/material";
import SectionTitle from "../../section title/SectionTitle";

const ContactUs = () => {
    return (
        <div>
            <SectionTitle mainTitle="Reach us" subTitle="Knock us now whatever you want to know." ></SectionTitle>
            <div className="w-10/12 min-h-[400px] mx-auto">
                  <div className="min-w-full  flex flex-col lg:flex-row gap-4 p-4">
                      <div className="flex flex-col gap-4 lg:w-1/2">
                      <TextField id="outlined-basic" className="bg-gray-100" label="Your name" variant="outlined" />
                      <TextField id="outlined-basic" className="bg-gray-100" label="Your email" variant="outlined" />
                      <TextField id="outlined-basic" className="bg-gray-100" label="Your phone number" variant="outlined" />
                      </div>
                      <div className="lg:w-1/2 min-h-full">
                      <TextField
          id="outlined-textarea"
          label="Your message"
          placeholder="message"
          className="w-full bg-gray-100"
          rows={7.3}
          multiline
        />
                      </div>
                  </div>
                 <div className="text-center mt-4">
                 <button className="bg-yellow-500 p-4 rounded font-semibold text-gray-600">Send message</button>
                 </div>
            </div>
        </div>
    );
};

export default ContactUs;