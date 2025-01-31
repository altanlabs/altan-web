import React from 'react';
import { Stack, Card, FormGroup, FormControlLabel, Checkbox, Typography, Divider } from '@mui/material';

interface Category {
    id: string;
    name: string;
    subcategories: { id: string; name: string }[];
}

interface FilterSectionProps {
    categories: Category[];
    selectedCategories: string[];
    handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isVerified: boolean;
    handleVerifiedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hasFreeDemo: boolean;
    handleFreeDemoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
    categories,
    selectedCategories,
    handleCategoryChange,
    isVerified,
    handleVerifiedChange,
    hasFreeDemo,
    handleFreeDemoChange,
}) => {
    return (
        <Card className="hidden md:block p-4 rounded-[10px] border border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 hover:bg-gray-100 dark:hover:bg-gray-800">
            <FormGroup>
                <Stack spacing={1}>
                    <Typography variant="h6" sx={{ color: 'white' }}>Filter</Typography>
                    <Divider sx={{ backgroundColor: 'white' }} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isVerified}
                                onChange={handleVerifiedChange}
                                name="isVerified"
                                sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                            />
                        }
                        label="Is verified"
                        sx={{ color: 'white' }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hasFreeDemo}
                                onChange={handleFreeDemoChange}
                                name="hasFreeDemo"
                                sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                            />
                        }
                        label="Free demo"
                        sx={{ color: 'white' }}
                    />
                    <Typography variant="h6" sx={{ color: 'white' }}>Business Area</Typography>
                    <Divider sx={{ backgroundColor: 'white' }} />
                    {categories.map((category) => (
                        <div key={category.id}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={handleCategoryChange}
                                        name={category.id}
                                        sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                                    />
                                }
                                label={category.name}
                                sx={{ color: 'white' }}
                            />
                            {selectedCategories.includes(category.id) && (
                                <Stack spacing={1} ml={4}>
                                    {category.subcategories.map((subcategory) => (
                                        <FormControlLabel
                                            key={subcategory.id}
                                            control={
                                                <Checkbox
                                                    sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                                                    checked={selectedCategories.includes(subcategory.id)}
                                                    onChange={handleCategoryChange}
                                                    name={subcategory.id}
                                                />
                                            }
                                            label={subcategory.name}
                                            sx={{ color: 'white' }}
                                        />
                                    ))}
                                </Stack>
                            )}
                        </div>
                    ))}
                </Stack>
            </FormGroup>
        </Card>
    );
};

export default FilterSection;
