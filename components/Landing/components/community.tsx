"use client"
import { useState, useEffect } from 'react';
import { Grid, Card, Typography, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { format } from 'timeago.js';
import Link from 'next/link';

interface Interface {
  name: string;
  cover_url: string | undefined;
  id: string;
  label: string;
  deployment_url: string;
  last_modified_time: string | null;
  // Add other interface properties as needed
}

export default function Community() {
  const { t } = useTranslation(["common", "home"]);
  const [tab, setTab] = useState('latest');
  const [interfaces, setInterfaces] = useState<Interface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInterfaces();
  }, [tab]);

  const fetchInterfaces = async () => {
    setLoading(true);
    try {
      const url = tab === 'featured' 
        ? 'https://api.altan.ai/platform/interfaces/?featured=true'
        : 'https://api.altan.ai/platform/interfaces/';
        
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setInterfaces(data.interfaces || []);
    } catch (error) {
      console.error('Error fetching interfaces:', error);
      setInterfaces([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (ui: Interface) => {
    // Navigate to interface detail page instead of deployment URL
    window.location.href = `/a/${ui.name}`;
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-2">
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
          sx={{
            mb: 4,
            "& .MuiTabs-root": {
              minHeight: "40px",
            },
            "& .MuiTab-root": {
              color: "rgb(148, 163, 184)",
              minHeight: "36px",
              textTransform: "none",
              fontSize: "0.9rem",
              margin: "0 4px",
              padding: "6px 16px",
              borderRadius: "9999px",
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            value="latest"
            icon={<Icon icon="solar:clock-circle-linear" width="20" />}
            iconPosition="start"
            label={t("common:latest")}
          />
          <Tab
            value="featured"
            icon={<Icon icon="solar:star-linear" width="20" />}
            iconPosition="start"
            label={t("common:featured")}
          />
        </Tabs>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : interfaces && interfaces.length > 0 ? (
          <Grid container spacing={2}>
            {interfaces.map((ui) => (
              <Grid item key={ui.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  component={Link}
                  href={`/a/${ui.name}`}
                  className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  sx={{
                    bgcolor: "rgb(32, 32, 32)",
                    boxShadow: "none",
                    border: "none",
                  }}
                >
                  <div className="w-full aspect-video bg-[#2a2a2a]">
                    <img
                      src={ui.cover_url}
                      alt={ui.label}
                      className="w-full h-full object-cover"
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = "/images/features/features-light-01.png";
                      }}
                    />
                  </div>
                  <div className="px-3 py-2 flex justify-between items-center">
                    <Typography variant="body2" className="text-gray-200">
                      {ui.label}
                    </Typography>
                    {ui.last_modified_time && (
                      <Typography variant="caption" className="text-gray-400">
                        {format(
                          new Date(
                            new Date(ui.last_modified_time).getTime() +
                              60 * 60 * 1000
                          )
                        )}
                      </Typography>
                    )}
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className="text-center text-slate-400 py-8">
            {t("common:no_interfaces_found")}
          </div>
        )}
      </div>
    </section>
  );
}
