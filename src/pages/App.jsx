import { useForm } from "react-hook-form";
import { Container, Typography, Box, InputBase, ButtonBase } from "@mui/material";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your form submission logic
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding:"5.5rem"}}>
        {/* =============== heading */}
        <Typography variant="h5" gutterBottom sx={{ color: "#4c4c4c", fontWeight: "800", marginBottom: "32px" }}>
          Registration
        </Typography>

        {/* =============== registration form start */}
        <form onSubmit={handleSubmit(onSubmit)} className="form_layout">
          {errors.listName?.type === "required" && (
            <Typography className="error" role="alert">
              Lis&apos;s link name is required
            </Typography>
          )}

          <InputBase
            sx={{ marginBottom: "30px", outline: "2px solid #00C0B3", padding: "7px  15px", fontSize: "20px", borderRadius: "30px", width: "100%" }}
            {...register("listName", { required: true })}
            variant="outlined"
            fullWidth
            error={errors.listName}
            placeholder="List's Name"
          />

          {errors.name?.type === "required" && (
            <Typography className="error" role="alert">
              Name is required
            </Typography>
          )}

          <InputBase
            sx={{ marginBottom: "30px", outline: "2px solid #00C0B3", padding: "7px  15px", fontSize: "20px", borderRadius: "30px", width: "100%" }}
            {...register("name", { required: true })}
            placeholder="Name"
            variant="outlined"
            fullWidth
            error={errors.name}
          />

          {errors.surname?.type === "required" && (
            <Typography className="error" role="alert">
              Surname is required
            </Typography>
          )}

          <InputBase
            sx={{ marginBottom: "30px", outline: "2px solid #00C0B3", padding: "7px  15px", fontSize: "20px", borderRadius: "30px", width: "100%" }}
            {...register("surname", { required: true })}
            placeholder="Surname"
            variant="outlined"
            fullWidth
            error={errors.surname}
          />

          {errors.email && (
            <Typography className="error" role="alert">
              Email is required
            </Typography>
          )}

          <InputBase
            sx={{ outline: "2px solid #00C0B3", padding: "7px  15px", fontSize: "20px", borderRadius: "30px", width: "100%" }}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            variant="outlined"
            fullWidth
            error={errors.email}
          />

          <Box sx={{ textAlign: "center", marginTop: "40px" }}>
            {/* checkbox */}
            <div style={{ marginBottom: "60px" }} className="input_checkbox">
              <input type="checkbox" id="cb1" />
              <label htmlFor="cb1"></label>

              <p>Keep me informed about my lists by email</p>
            </div>
            {/* submit button */}
            <ButtonBase
              type="submit"
              variant="contained"
              sx={{
                display: "inline-block",
                padding: "15px 28px",
                background: "rgb(238, 80, 127)",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                borderRadius: "30px",
              }}
            >
              Continue
            </ButtonBase>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default App;
