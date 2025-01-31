"use client";

import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, TextField, Select, MenuItem, Divider, Container, Chip, Skeleton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AltanerCard from './templates/AltanerCard';
import WorkflowCard from './templates/WorkflowCard';
import AgentCard from './templates/AgentCard';
import FormCard from './templates/FormCard';
import { capitalize } from 'lodash';
import axios from 'axios';
import Particles from '../Landing/components/particles';

export const fetchTemplates = async (templateType) => {
  try {
    const response = await axios.get(`https://api.altan.ai/platform/marketplace/templates/${templateType}`);
    return response.data.templates;
  } catch (error) {
    console.error('Error fetching templates:', error);
    throw error;
  }
};

const Marketplace = ({ templateType }) => {
  const [type, setType] = useState(templateType || 'workflow');
  const [templates, setTemplates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setIsLoading(true);
        const fetchedTemplates = await fetchTemplates(type);
        setTemplates(fetchedTemplates);
        setFilteredTemplates(fetchedTemplates);
      } catch (err) {
        setError('Failed to load templates. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTemplates();
  }, [type]);

  useEffect(() => {
    const results = templates.filter((template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const uniqueResults = results.filter((template, index, self) =>
      index === self.findIndex((t) => t.id === template.id)
    );
    uniqueResults.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
    setFilteredTemplates(uniqueResults);
  }, [searchTerm, templates]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const renderTemplateCard = (template) => {
    switch (type) {
      case 'altaner':
        return <AltanerCard template={template} />;
      case 'workflow':
        return <WorkflowCard template={template} />;
      case 'agent':
        return <AgentCard template={template} />;
      case 'form':
        return <FormCard template={template} />;
      default:
        return <AltanerCard template={template} />;
    }
  };

  const renderSkeletons = () => (
    <Grid container spacing={3}>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: '5%' }} />
        </Grid>
      ))}
    </Grid>
  );


  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ marginTop: '20px' }}>
        {error}
      </Typography>
    );
  }

  // Filter out the featured templates
  const featuredTemplates = filteredTemplates.filter((template) => template.is_featured);
  // Filter non-featured templates
  const nonFeaturedTemplates = filteredTemplates.filter((template) => !template.is_featured);

  return (
    <section>
      <Container sx={{ py: 24 }}>
        <Particles className="absolute inset-10 h-250 -z-99" quantity={10} />

        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-center" data-aos="fade-down">
          <Chip label={capitalize(type)} variant="soft" size="large" color="secondary" />  Marketplace
        </h1>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>

          <TextField
            fullWidth
            label="Search..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}

            sx={{
              flex: 1,
              maxWidth: 600,
              pb: 3,
              borderRadius: '16px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: '2rem',
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'gray',
                },
                color: 'gray',
              },
              '& .MuiInputLabel-root': {
                color: 'gray',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'gray',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: 'gray' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Select
                    value={type}
                    onChange={handleTypeChange}
                    sx={{
                      minWidth: 120,
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '& .MuiSelect-select': { paddingRight: '32px' },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { maxHeight: 200 },
                      },
                    }}
                  >
                    <MenuItem value="altaner">Altaner</MenuItem>
                    <MenuItem value="workflow">Workflow</MenuItem>
                    <MenuItem value="agent">Agent</MenuItem>
                    <MenuItem value="form">Form</MenuItem>
                  </Select>
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              style: { color: 'gray' },
            }}
          />
        </Box>

        {isLoading ? (
          renderSkeletons()
        ) : error ? (
          <Typography variant="h6" color="error" align="center" sx={{ marginTop: '20px' }}>
            {error}
          </Typography>
        ) : (
          <>
            {/* Featured Templates */}
            {featuredTemplates.length > 0 && (
              <>
                <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  Featured
                </h3 >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredTemplates.map((template) => (
                    renderTemplateCard(template)
                  ))}
                </div>
              </>
            )}

            {/* Divider */}
            {featuredTemplates.length > 0 && nonFeaturedTemplates.length > 0 && (
              <Divider sx={{ my: 4 }} />
            )}

            {/* Non-Featured Templates */}
            {nonFeaturedTemplates.length > 0 && (
              <>
                <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  All
                </h3>
                <Grid container spacing={3}>
                  {nonFeaturedTemplates.map((template) => (
                    <Grid item xs={12} sm={6} md={4} key={template.id}>
                      {renderTemplateCard(template)}
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {filteredTemplates.length === 0 && (
              <Typography variant="body1" align="center" sx={{ mt: 3 }}>
                No templates found matching your search.
              </Typography>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Marketplace;
