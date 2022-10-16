import { Box, FormControl, FormControlLabel, FormHelperText, Grid, Radio, RadioGroup } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { sendAvailabilityRequestMail } from "../api/portfolio";
import { Info, StyleBox } from "../assets/styles";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";
import TitleComponent from "../components/TitleComponent";
import { MailData } from "../types";

const ContactMeContentMain = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
  },

}));


export default function HireMe() {
  // contactMe
  // portfolio
  const [isContract, setIsContract] = useState("0");
  const [sending, setSending] = useState(false);

  const [mailData, setMailData] = useState<MailData>()
  const [errors, setError] = useState<{ name?: string, email?: string, phone?: string, message?: string, salary?: string }>()

  const ValidateFormData = () => {

    let _errors: { name?: string, email?: string, phone?: string, message?: string, salary?: string } = {};
    let isValidated = true;
    if (!mailData?.name || mailData?.name.length < 3) {
      _errors.name = "Please enter a valid name";
      isValidated = false;
    }
    if (!mailData?.email || mailData?.email.indexOf("@") < 0) {
      _errors.email = "Please enter a valid email";
      isValidated = false;
    }
    if (!mailData?.phone || mailData?.phone.length < 7) {
      _errors.phone = "Please enter a valid phone number";
      isValidated = false;
    }
    if (!mailData?.message || mailData?.message.length < 10) {
      _errors.message = "Please enter a valid message, there must be more than 9 characters";
      isValidated = false;
    }
    if (isContract && !mailData?.salary) {
      _errors.salary = "Please tell the me your budget or set to Full Time and discuss payment later";
      isValidated = false;

    }
    if (!isValidated)
      setError(_errors)

    return isValidated;
  }
  return (
    <StyleBox
      sx={{
        paddingBottom: th => th.spacing(2),
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "#0e0c38"
      }}
      id={"getStarted"}>
      <TitleComponent title="Let Build This Exciting New Project Together" />

      <Info>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
        nostrud exercitation.
      </Info>
      <ContactMeContentMain>
        <Grid

          spacing={3}
          container

        >
          <Grid
            item
            sm={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            {" "}
            <CustomTextField
              inputType="text"
              helperText="Name"
              variant={"filled"}
              fullWidth
              onChange={(e) => {
                setMailData(prev => ({ ...prev as MailData, name: e.target.value }))
              }}
            />
            <ShowError error={errors?.name} />
          </Grid>
          <Grid
            item
            sm={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            {" "}
            <CustomTextField
              inputType="email"
              helperText="Email"
              variant={"filled"}
              fullWidth
              onChange={(e) => {
                setMailData(prev => ({ ...prev as MailData, email: e.target.value }))
              }}
            />
            <ShowError error={errors?.email} />
          </Grid>
          <Grid
            item
            sm={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            {" "}
            <CustomTextField
              inputType="tel"
              helperText="PhoneNumber"
              variant={"filled"}
              fullWidth
              onChange={(e) => {
                setMailData(prev => ({ ...prev as MailData, phone: e.target.value as string }))
              }}
            />
            <ShowError error={errors?.phone} />
          </Grid>
          <Grid
            item
            sm={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >

            <FormControl sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
              maxHeight: "64px",
              width: "100%", height: "100%", px: th => th.spacing(1),
            }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={isContract}
                name="radio-buttons-group"
                row
                onChange={(e) => {
                  setIsContract(e.target.value)
                }}
              >
                <FormControlLabel value={0} control={<Radio />} label="Full time" />
                <FormControlLabel value={1} control={<Radio
                />} label="Contract based" />

              </RadioGroup>
            </FormControl>
            {/* <ShowError error={"don't show"} /> */}
          </Grid>
          {isContract === "1" && <Grid
            item
            sm={12}
            lg={12}
            style={{
              width: "100%",

            }}
          >
            <CustomTextField
              inputType="number"
              prefix={"$ :"}
              helperText="Budget"
              variant={"filled"}
              fullWidth
              onChange={(e) => {
                setMailData(prev => ({ ...prev as MailData, salary: e.target.value as string }))
              }}
            />
            <ShowError error={errors?.salary} />
          </Grid>}
          <Grid
            item
            sm={12}
            lg={12}
            style={{
              width: "100%",
            }}
          >
            {/* {" "} */}
            <CustomTextField
              helperText="Message"
              variant={"filled"}
              multiLine
              fullWidth
              onTextAreaChange={(e) => {
                setMailData(prev => ({ ...prev as MailData, message: e.target.value as string }))
              }}
            />
            <ShowError error={errors?.message} />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* {" "} */}
            <CustomButton
              text="  Hire  "
              variant={"filled"}
              innerButtonStyle={{ backgroundColor: "red", color: "white" }}
              loading={sending}
              onClick={
                async (_) => {
                  if (ValidateFormData()) {

                    setSending(true);
                    //make post
                    await sendAvailabilityRequestMail({ ...mailData as MailData, isContractBased: (isContract === "1") }).then((message) => {
                      if (message === "success")
                        alert("message sent successfully");
                      else {
                        alert(message);
                      }
                    })
                    setSending(false);
                  }
                }
              }
            />
          </Grid>
        </Grid>
      </ContactMeContentMain >
    </StyleBox >
  );
}

function ShowError({ error, dummy }: { error?: string, dummy?: boolean }) {
  if (error)
    return <FormHelperText sx={{ color: dummy ? "transparent" : "red", fontSize: "15px" }}>
      {error}
    </FormHelperText>
  else
    return <></>
}