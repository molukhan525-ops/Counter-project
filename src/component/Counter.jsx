
import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >

            <div
                style={{
                    width: "380px",
                    padding: "35px",
                    textAlign: "center",
                    background: "white",
                    borderRadius: "25px",
                    border: "3px solid #3b82f6",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
            >

                <h2
                    style={{
                        margin: "0",
                        fontSize: "35px",
                        color: "#1e3a8a",
                        letterSpacing: "4px",
                    }}
                >
                    COUNTER
                </h2>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                        fontSize: "14px",
                    }}
                >
                    React useState Project
                </p>

                <div
                    style={{
                        marginTop: "30px",
                        padding: "25px",
                        borderRadius: "18px",
                        background:
                            "linear-gradient(135deg, #eff6ff, #dbeafe)",
                        border: "2px solid #93c5fd",
                    }}
                >

                    <p
                        style={{
                            margin: "0",
                            color: "#64748b",
                            fontSize: "12px",
                            letterSpacing: "2px",
                        }}
                    >
                        CURRENT COUNT
                    </p>

                    <h1
                        key={count}
                        style={{
                            margin: "10px 0 0",
                            fontSize: "75px",
                            color: "#1d4ed8",
                            animation: "pop 0.3s ease",
                        }}
                    >
                        {count}
                    </h1>

                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginTop: "25px",
                    }}
                >

                    <button
                        onClick={() => setCount(count + 1)}
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            background: "#2563eb",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        ＋ Increase
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            background: "#ef4444",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        − Decrease
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            background: "#475569",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        ↻ Reset
                    </button>

                </div>

                <p
                    style={{
                        marginTop: "22px",
                        marginBottom: "0",
                        color: "#94a3b8",
                        fontSize: "12px",
                    }}
                >
                    ⚡ Counter is Active
                </p>

            </div>

            <style>
                {`
@keyframes pop {
    0 % {
        transform: scale(0.6);
        opacity: 0;
    }

    70 % {
        transform: scale(1.1);
        opacity: 1;
    }

    100 % {
        transform: scale(1);
        opacity: 1;
    }
}
`}
            </style>

        </div>
    )
}

export default Counter

