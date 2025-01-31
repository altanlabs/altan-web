"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

interface InterfaceData {
  name: string;
  label: string;
  deployment_url: string;
  id: string;
  repo_name: string;
}

export default function InterfaceView({ name }: { name: string }) {
  const [ui, setUi] = useState<InterfaceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterface = async () => {
      try {
        const res = await fetch(
          `https://api.altan.ai/platform/interfaces/name/${name}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch interface");
        }
        const data = await res.json();
        setUi(data.interface);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchInterface();
  }, [name]);

  if (error) return <div>Error: {error}</div>;
  if (!ui) return <div>Loading...</div>;

  return (
    <section>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20">
        <Stack height="80vh">
          {/* Main content */}
          <Box sx={{ height: "100%", mt: '10px' }}>
            <Stack
              height="100%"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "12px",
                overflow: "hidden",
                bgcolor: "#1a1b1e",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3)",
              }}
            >
              {/* Browser Chrome */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  p: 1,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  bgcolor: "#141518",
                }}
              >
                {/* Browser Controls */}
                <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
                </Stack>

                {/* URL Bar */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 0.5,
                    borderRadius: "6px",
                    bgcolor: "#0a0a0b",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                    }}
                  >
                    {ui.deployment_url || `https://${ui.repo_name}.preview.altan.ai`}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      onClick={() => window.open(ui.deployment_url, "_blank")}
                      sx={{ 
                        color: "text.secondary",
                        '&:hover': {
                          color: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      <span className="iconify" data-icon="lucide:external-link" data-width="14" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => window.open(ui.deployment_url)}
                      sx={{ 
                        color: "text.secondary",
                        '&:hover': {
                          color: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      <span className="iconify" data-icon="lucide:maximize" data-width="14" />
                    </IconButton>
                  </Stack>
                </Box>

                {/* Clone Button */}
                <button
                  onClick={() =>
                    (window.location.href = `https://dashboard.altan.ai/remix/${ui.id}`)
                  }
                  className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1.5 hover:shadow-lg hover:scale-105 transition-all ml-2"
                >
                  <Typography sx={{ fontSize: "0.875rem", color: "white", fontWeight: "medium" }}>
                    Clone
                  </Typography>
                </button>
              </Stack>

              {/* Preview iframe */}
              <Box sx={{ flex: 1, position: "relative" }}>
                <iframe
                  src={ui.deployment_url || `https://${ui.repo_name}.preview.altan.ai`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </div>
    </section>
  );
}
