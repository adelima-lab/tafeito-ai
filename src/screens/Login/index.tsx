import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import CardHeader from '@mui/material/CardHeader';
import { CustomizedCardHeader } from './style'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Login = () => {


    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
        }}>

            <Card sx={{ maxWidth: 480 }}>
                {/* <CardHeader
                    title="Tafeito"
                    subheader="Transforme suas tarefas em ações"
                 >
                </CardHeader> */}

                <CustomizedCardHeader
                    title="Tafeito"
                    subheader="Transforme suas tarefas em ações"
                />
                             
                <CardContent>
                    <Box py={1}>
                        <TextField fullWidth id="username" label="Usuário" variant="filled" />
                    </Box>

                    <Box py={1}>
                        <TextField fullWidth id="password" label="Senha" variant="filled" />
                    </Box>
                </CardContent>

                <CardActions sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button fullWidth variant="contained">Login</Button>
                </CardActions>
            </Card>

        </Box>
        
    )
}

export default Login;