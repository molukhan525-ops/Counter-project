import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function PracticeMui() {
    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 20px',

                background: `
                    radial-gradient(
                        circle at 20% 20%,
                        rgba(25,118,210,0.12),
                        transparent 35%
                    ),
                    radial-gradient(
                        circle at 80% 80%,
                        rgba(0,150,255,0.10),
                        transparent 35%
                    ),
                    #f4f7fb
                `,
            }}
        >

            {/* ================= CARD ================= */}

            <Card
                sx={{
                    width: {
                        xs: '100%',
                        sm: 380
                    },

                    maxWidth: 380,

                    borderRadius: '22px',

                    overflow: 'hidden',

                    background: 'rgba(255,255,255,0.72)',

                    backdropFilter: 'blur(18px)',

                    WebkitBackdropFilter: 'blur(18px)',

                    border: '1px solid rgba(255,255,255,0.8)',

                    boxShadow: `
                        0 20px 50px rgba(0,0,0,0.15),
                        0 5px 20px rgba(25,118,210,0.08)
                    `,

                    animation: 'cardAppear 0.8s ease',

                    transition: `
                        transform 0.4s ease,
                        box-shadow 0.4s ease
                    `,

                    '&:hover': {
                        transform: 'translateY(-12px) scale(1.015)',

                        boxShadow: `
                            0 30px 70px rgba(0,0,0,0.20),
                            0 10px 30px rgba(25,118,210,0.18)
                        `,
                    },

                    '@keyframes cardAppear': {
                        from: {
                            opacity: 0,
                            transform: 'translateY(35px) scale(0.96)'
                        },

                        to: {
                            opacity: 1,
                            transform: 'translateY(0) scale(1)'
                        }
                    }
                }}
            >

                {/* ================= IMAGE ================= */}

                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >

                    <CardMedia
                        component="img"
                        height="235"
                        image="https://static.vecteezy.com/system/resources/thumbnails/053/733/048/small/modern-car-captured-in-close-upgraphy-with-precision-and-innovation-free-photo.jpg"
                        alt="Luxury Car"

                        sx={{
                            objectFit: 'cover',

                            transition:
                                'transform 0.7s ease, filter 0.7s ease',

                            '&:hover': {
                                transform: 'scale(1.09)',
                                filter: 'brightness(1.08)'
                            }
                        }}
                    />


                    {/* IMAGE DARK OVERLAY */}

                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,

                            background:
                                'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.42))',

                            pointerEvents: 'none'
                        }}
                    />


                    {/* PREMIUM BADGE */}

                    <Box
                        sx={{
                            position: 'absolute',

                            top: 15,
                            right: 15,

                            padding: '7px 13px',

                            borderRadius: '30px',

                            color: 'white',

                            fontSize: '11px',

                            fontWeight: 700,

                            letterSpacing: '1px',

                            background:
                                'rgba(255,255,255,0.18)',

                            border:
                                '1px solid rgba(255,255,255,0.4)',

                            backdropFilter: 'blur(10px)',

                            boxShadow:
                                '0 5px 20px rgba(0,0,0,0.18)',

                            animation:
                                'badgeFloat 3s ease-in-out infinite',

                            '@keyframes badgeFloat': {
                                '0%, 100%': {
                                    transform: 'translateY(0)'
                                },

                                '50%': {
                                    transform: 'translateY(-5px)'
                                }
                            }
                        }}
                    >
                        PREMIUM
                    </Box>

                </Box>


                {/* ================= CONTENT ================= */}

                <CardContent
                    sx={{
                        padding: '24px 25px 10px'
                    }}
                >

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 800,

                            fontStyle: 'italic',

                            letterSpacing: '1px',

                            color: '#111',

                            marginBottom: '12px'
                        }}
                    >
                        CAR
                    </Typography>


                    <Typography
                        variant="body2"
                        sx={{
                            color: '#4d5560',

                            fontSize: '14px',

                            lineHeight: 1.65,

                            fontWeight: 500
                        }}
                    >
                        Founded in Sweden in 1994 by Christian von
                        Koenigsegg, Koenigsegg Automotive builds
                        world-class hypercars that break speed
                        records. These hand-built vehicles use
                        advanced carbon fiber materials and custom
                        in-house engines to deliver massive power.
                    </Typography>

                </CardContent>


                {/* ================= BUTTONS ================= */}

                <CardActions
                    sx={{
                        padding: '15px 25px 25px',

                        display: 'flex',

                        gap: '12px'
                    }}
                >

                    {/* FEEDBACK */}

                    <Button
                        variant="outlined"
                        sx={{
                            position: 'relative',

                            overflow: 'hidden',

                            borderRadius: '12px',

                            padding: '10px 16px',

                            fontSize: '12px',

                            fontWeight: 700,

                            letterSpacing: '0.5px',

                            color: '#1976d2',

                            borderColor:
                                'rgba(25,118,210,0.3)',

                            background:
                                'rgba(255,255,255,0.35)',

                            backdropFilter: 'blur(10px)',

                            transition:
                                'all 0.3s ease',

                            '&:hover': {
                                transform:
                                    'translateY(-4px)',

                                borderColor:
                                    '#1976d2',

                                background:
                                    'rgba(255,255,255,0.75)',

                                boxShadow:
                                    '0 10px 25px rgba(25,118,210,0.18)'
                            },

                            '&::before': {
                                content: '""',

                                position: 'absolute',

                                top: 0,
                                left: '-120%',

                                width: '80%',
                                height: '100%',

                                background:
                                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',

                                transform:
                                    'skewX(-20deg)',

                                transition:
                                    'left 0.6s ease'
                            },

                            '&:hover::before': {
                                left: '140%'
                            }
                        }}
                    >
                        FEEDBACK
                    </Button>


                    {/* LEARN MORE */}

                   <Button
  variant="contained"
  onClick={() => {
    window.open(
      "https://www.google.com/search?q=Koenigsegg+Automotive+car",
      "_blank"
    );
  }}
  sx={{
    borderRadius: 2,
    px: 2,
    py: 1,
    fontSize: 12,
    fontWeight: 800,

    background:
      "linear-gradient(135deg,#1976d2,#42a5f5)",

    boxShadow:
      "0 8px 20px rgba(25,118,210,.25)",

    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow:
        "0 12px 30px rgba(25,118,210,.35)"
    }
  }}
>
  LEARN MORE
</Button>

                </CardActions>

            </Card>

        </Box>
    );
}

export default PracticeMui;