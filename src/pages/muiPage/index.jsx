import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Input, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const steps = ['First Step', 'Second Step', 'Confirmation'];

const MultiStepForm = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: 'bold' }} // fixed typo "fontWheight"
                        >
                            Multi Step Form
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box
                sx={{
                    width: '40%',
                    marginInline: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    textAlign: 'center',
                    border: '1px solid gray',
                    marginTop: '50px',
                    height: '550px',
                    paddingTop: '70px',
                    paddingInline: '20px',
                }}
            >
                <Typography sx={{ marginBottom: '20px' }} variant="h4">
                    Multi Step Form
                </Typography>
                <Typography sx={{ marginBottom: '50px' }} variant="subtitle2">
                    React Material UI multi step form with basic form validation logic.
                </Typography>

                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((e) => (
                        <Step key={e}>
                            <StepLabel>{e}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box
                    sx={{
                        marginTop: '50px',
                        width: '100%',
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center',
                    }}
                >
                    <Input sx={{ width: '230px' }} placeholder="First Name*" />
                    <Input sx={{ width: '230px' }} placeholder="Last Name*" />
                </Box>

                <Box
                    sx={{
                        marginTop: '40px',
                        width: '100%',
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center',
                    }}
                >
                    <Input sx={{ width: '230px' }} placeholder="Email" />
                    <FormControl variant="standard" sx={{ width: '230px' }}>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select labelId="gender-label" id="gender" label="Gender">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" disabled>
                        NEXT
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default MultiStepForm;
