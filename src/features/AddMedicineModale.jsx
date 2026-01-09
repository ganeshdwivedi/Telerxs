import { useForm, useFieldArray, Controller } from "react-hook-form"
import { TextField, Box, Typography, Grid, IconButton, Chip } from "@mui/material"
import ImageIcon from "@mui/icons-material/Image"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import BaseModal from "../components/BaseModal"
import ImageUploader from "../components/ImageUploaderMed"
import apiCaller from "../api/ApiCaller"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import AppSnackbar from "../components/Toast"

// interface DosageOption {
//     id: string
//     name: string
//     price: string
// }

// interface QuantityOption {
//     id: string
//     name: string
//     price: string
// }

// export interface MedicineFormData {
//     productName: string
//     brand: string
//     originalPrice: string
//     salePrice: string
//     markup: string
//     uploadImages: string
//     productImages: string
//     precaution: string
//     sideEffects: string
//     drugInteractions: string
//     usedFor: string[]
//     howItWorks: string
//     generics: string[]
//     dosageOptions: DosageOption[]
//     quantityOptions: QuantityOption[]
// }

// interface AddMedicineModalProps {
//     open: boolean
//     onClose: () => void
//     onSubmit: (data: MedicineFormData) => void
//     initialData?: MedicineFormData
// }

const inputStyle = {
    backgroundColor: "#E0E0E0",
    borderRadius: "6px",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none",
        },
    },
    "& .MuiInputBase-input": {
        padding: "12px 14px",
        fontSize: "14px",
    },
}

const textareaStyle = {
    backgroundColor: "#E0E0E0",
    borderRadius: "6px",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none",
        },
    },
    "& .MuiInputBase-input": {
        padding: "0px 6px",
        fontSize: "14px",
    },
}

const labelStyle = {
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "8px",
    color: "#000",
}

const sectionHeaderStyle = {
    fontSize: "12px",
    fontWeight: 600,
    color: "#0F7DC1",
    marginBottom: "16px",
    marginTop: "24px",
    textAlign: "center",
}


export default function AddMedicineModal({ open, onClose, onSubmit, initialData }) {
    const query = useQueryClient();
    const snackbarRef = useRef();
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        defaultValues: initialData || {
            productName: "",
            brand: "",
            images: {
                thumbnail: "",
                gallery: []
            },
            precaution: "",
            sideEffects: "",
            drugInteractions: "",
            usedFor: [],
            howItWorks: "",
            generics: [],
            dosageOptions: [],
            quantityOptions: [],
        },
    });
    const { images, generics, usedFor } = watch();

    const {
        fields: dosageFields,
        append: appendDosage,
        remove: removeDosage,
    } = useFieldArray({
        control,
        name: "dosageOptions",
    })

    const {
        fields: quantityFields,
        append: appendQuantity,
        remove: removeQuantity,
    } = useFieldArray({
        control,
        name: "quantityOptions",
    })

    // Watch form values for dynamic UI

    const handleFormSubmit = (data) => {
        if (initialData?._id) {
            updateMutate(data);
            return;
        }
        mutate(data);
        onSubmit(data)
        reset()
        onClose();
    }


    const handleAddUsage = (newUsage) => {
        if (newUsage?.trim()) {
            setValue('usedFor', [newUsage, ...(usedFor || [])])
        }
    }

    const handleRemoveUsage = (index) => {
        setValue('usedFor', usedFor?.filter((_, i) => i !== index))
    }

    const handleAddGeneric = (newGeneric) => {
        if (newGeneric.trim()) {
            setValue('generics', [newGeneric, ...(generics || [])])
        }
    }

    const handleRemoveGeneric = (index) => {
        setValue('generics', generics?.filter((_, i) => i !== index))
    }

    const handleAddDosage = (name, priceAdjustment) => {
        if (name.trim() && priceAdjustment.trim()) {
            appendDosage({
                name,
                priceAdjustment,
            })
        }
    }

    const handleAddQuantity = (name, priceAdjustment) => {
        if (name.trim() && priceAdjustment.trim()) {
            appendQuantity({
                name,
                priceAdjustment,
            })
        }
    }

    // add modale
    const { mutate } = useMutation({
        mutationFn: async (data) => {
            const response = await apiCaller.post(`/medicines`, data);

            return response?.data?.data


        },
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ['getAllmedicines'] });
            snackbarRef.current.showSuccess("Medicine Added successfully")
        },
        onError: (error) => {
            snackbarRef.current.showError('Something went wrong!')
        },
    });

    //update modale
    const { mutate: updateMutate } = useMutation({
        mutationFn: async (data) => {
            const response = await apiCaller.put(`/medicines/${initialData?._id}`, data);

            return response?.data?.data


        },
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ['getAllmedicines'] });
            snackbarRef.current.showSuccess("Medicine Added successfully")
        },
        onError: (error) => {
            snackbarRef.current.showError('Something went wrong!')
        },
    })

    useEffect(() => {
        if (initialData?._id) {
            reset({
                ...initialData,
                precaution: initialData.precautions || "", // API mismatch handling
            });
        } else {
            reset({
                productName: "",
                brand: "",
                images: { thumbnail: "", gallery: [] },
                precaution: "",
                sideEffects: "",
                drugInteractions: "",
                usedFor: [],
                howItWorks: "",
                generics: [],
                dosageOptions: [],
                quantityOptions: [],
            });
        }
    }, [initialData, reset]);



    return (
        <BaseModal
            open={open}
            onClose={() => {
                reset()
                onClose()
            }}
            title="Add/Edit Medicine"
            onCancel={() => {
                reset()
                onClose()
            }}
            onAction={handleSubmit(handleFormSubmit)}
            actionLabel="Save"
            maxWidth="md"
        >
            <Box>
                {/* Basic Information Header */}
                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#00607C",
                        marginBottom: "16px",
                        textAlign: "center",
                        mt: 2,
                    }}
                >
                    Basic Information
                </Typography>

                <Box sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",          // Mobile: stacked
                        md: "1fr 1fr 1fr",      // Desktop: 8/12 + 4/12
                    },
                    gap: 3,
                    // mb: 4,
                    mt: 4,
                }}>
                    {/* Product Name */}
                    <Box>
                        <Typography sx={labelStyle}>Product Name *</Typography>
                        <Controller
                            name="productName"
                            control={control}
                            rules={{ required: "Product name is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    placeholder="Lisinopril"
                                    sx={inputStyle}
                                    error={!!errors.productName}
                                    helperText={errors.productName?.message}
                                />
                            )}
                        />
                    </Box>

                    {/* Brand */}
                    <Box>
                        <Typography sx={labelStyle}>Brand *</Typography>
                        <Controller
                            name="brand"
                            control={control}
                            rules={{ required: "Brand is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    placeholder="Generic"
                                    sx={inputStyle}
                                    error={!!errors.brand}
                                    helperText={errors.brand?.message}
                                />
                            )}
                        />
                    </Box>
                    <Box>
                        <Typography sx={labelStyle}>Category*</Typography>
                        <Controller
                            name="category"
                            control={control}
                            rules={{ required: "Cateogry is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    placeholder="category"
                                    sx={inputStyle}
                                    error={!!errors.brand}
                                    helperText={errors.brand?.message}
                                />
                            )}
                        />
                    </Box>
                </Box>

                <Box sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",          // Mobile: stacked
                        md: "1fr 1fr 1fr",      // Desktop: 8/12 + 4/12
                    },
                    gap: 3,
                    // mb: 4,
                    mt: 4,
                }}>

                    {/* Original Price */}
                    <Box>
                        <Typography sx={labelStyle}>Original Price ($)</Typography>
                        <Controller
                            name="originalPrice"
                            control={control}
                            render={({ field }) => <TextField onChange={(e) => field.onChange(Number(e.target.value))} type="number" {...field} fullWidth placeholder="20.00" sx={inputStyle} />}
                        />
                    </Box>

                    {/* Sale Price */}
                    <Box >
                        <Typography sx={labelStyle}>Sale Price ($)</Typography>
                        <Controller
                            name="salePrice"
                            control={control}
                            render={({ field }) => <TextField onChange={(e) => field.onChange(Number(e.target.value))} type="number" {...field} fullWidth placeholder="18.00" sx={inputStyle} />}
                        />
                    </Box>

                    {/* Markup */}
                    <Box >
                        <Typography sx={labelStyle}>Markup (%)</Typography>
                        <Controller
                            name="markup"
                            control={control}
                            render={({ field }) => <TextField onChange={(e) => field.onChange(Number(e.target.value))} type="number" {...field} fullWidth placeholder="10" sx={inputStyle} />}
                        />
                    </Box>

                </Box>

                <Box>


                    {/* Product Images Header */}
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#00607C",
                                marginBottom: "16px",
                            }}
                        >
                            Product Images
                        </Typography>
                    </Box>

                    <ImageUploader
                        label="Upload Images"
                        maxImages={10}
                        required
                        defaultImages={images?.gallery || []}
                        onChange={(files) => {
                            if (files?.length > 0) {
                                setValue('images.thumbnail', files[0])
                                setValue('images.gallery', files)
                            } else {
                                setValue('images.thumbnail', '')
                                setValue('images.gallery', [])
                            }
                        }}
                    />

                </Box>

                {/* Usage & Description section */}
                <Typography sx={sectionHeaderStyle}>Usage & Description</Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Used For</Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                        <TextField size="small" placeholder="e.g., Acne" id="newUsage" sx={{ flex: 1, ...inputStyle }} />
                        <IconButton
                            onClick={() => {
                                const input = document.getElementById("newUsage")
                                if (input) {
                                    handleAddUsage(input.value)
                                    input.value = ""
                                }
                            }}
                            sx={{
                                color: "#0F7DC1",
                                backgroundColor: "#F0F8FF",
                                "&:hover": { backgroundColor: "#E0EFFF" },
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {usedFor?.map((generic, index) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                                <TextField placeholder="ge" disabled id="newGeneric" value={generic} sx={{ flex: 1, ...inputStyle }} />
                                <IconButton onClick={() => handleRemoveUsage(index)}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>How It Works *</Typography>
                    <Controller
                        name="howItWorks"
                        control={control}
                        rules={{ required: "How it works is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Describe how the medicine works..."
                                sx={textareaStyle}
                                error={!!errors.howItWorks}
                                helperText={errors.howItWorks?.message}
                            />
                        )}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Generics</Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                        <TextField size="small" placeholder="e.g., Ibuprofen" id="newGeneric" sx={{ flex: 1, ...inputStyle }} />
                        <IconButton
                            onClick={() => {
                                const input = document.getElementById("newGeneric")
                                if (input) {
                                    handleAddGeneric(input.value)
                                    input.value = ""
                                }
                            }}
                            sx={{
                                color: "#0F7DC1",
                                backgroundColor: "#F0F8FF",
                                "&:hover": { backgroundColor: "#E0EFFF" },
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {generics?.map((generic, index) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                                <TextField placeholder="ge" disabled id="newGeneric" value={generic} sx={{ flex: 1, ...inputStyle }} />
                                <IconButton onClick={() => handleRemoveGeneric(index)}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        ))}
                    </Box>
                </Box>
                {/* Dosage Options section */}
                <Typography sx={sectionHeaderStyle}>Dosage Options</Typography>

                <Box sx={{ mb: 3 }}>
                    {dosageFields.map((field, index) => (
                        <Box
                            key={field.id}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr auto",
                                gap: 2,
                                mb: 2,
                                alignItems: "center",
                            }}
                        >
                            <Controller
                                name={`dosageOptions.${index}.name`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        size="small"
                                        placeholder="e.g., 0.05% Cream"
                                        disabled
                                        sx={inputStyle}
                                    />
                                )}
                            />
                            <Controller
                                name={`dosageOptions.${index}.priceAdjustment`}
                                control={control}
                                render={({ field }) => (
                                    <TextField onChange={(e) => field.onChange(Number(e.target.value))} {...field} fullWidth size="small" placeholder="e.g., +$ 2" disabled sx={inputStyle} />
                                )}
                            />
                            <IconButton onClick={() => removeDosage(index)} sx={{ color: "#757575" }}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr auto",
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        <TextField fullWidth size="small" placeholder="e.g., 0.05% Cream" id="newDosageName" sx={inputStyle} />
                        <TextField type="number" fullWidth size="small" placeholder="e.g., +$ 2" id="newDosagePrice" sx={inputStyle} />
                        <Box />
                    </Box>

                    <Typography
                        onClick={() => {
                            const nameInput = document.getElementById("newDosageName")
                            const priceInput = document.getElementById("newDosagePrice")
                            if (nameInput && priceInput) {
                                handleAddDosage(nameInput.value, priceInput.value)
                                nameInput.value = ""
                                priceInput.value = ""
                            }
                        }}
                        sx={{
                            fontSize: "12px",
                            color: "#0F7DC1",
                            cursor: "pointer",
                            fontWeight: 500,
                            mt: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <AddIcon fontSize="small" /> Add Dosage
                    </Typography>
                </Box>

                {/* Quantity Options section */}
                <Typography sx={sectionHeaderStyle}>Quantity Options</Typography>

                <Box sx={{ mb: 3 }}>
                    {quantityFields.map((field, index) => (
                        <Box
                            key={field.id}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr auto",
                                gap: 2,
                                mb: 2,
                                alignItems: "center",
                            }}
                        >
                            <Controller
                                name={`quantityOptions.${index}.name`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        size="small"
                                        placeholder="e.g., 20 Grams (1 Tube)"
                                        disabled
                                        sx={inputStyle}
                                    />
                                )}
                            />
                            <Controller
                                name={`quantityOptions.${index}.priceAdjustment`}
                                control={control}
                                render={({ field }) => (
                                    <TextField type="number" {...field} fullWidth size="small" placeholder="e.g., +$ 2" disabled sx={inputStyle} />
                                )}
                            />
                            <IconButton onClick={() => removeQuantity(index)} sx={{ color: "#757575" }}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr auto",
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="e.g., 20 Grams (1 Tube)"
                            id="newQuantityName"
                            sx={inputStyle}
                        />
                        <TextField type="number" fullWidth size="small" placeholder="e.g., +$ 2" id="newQuantityPrice" sx={inputStyle} />
                        <Box />
                    </Box>

                    <Typography
                        onClick={() => {
                            const nameInput = document.getElementById("newQuantityName")
                            const priceInput = document.getElementById("newQuantityPrice")
                            if (nameInput && priceInput) {
                                handleAddQuantity(nameInput.value, priceInput.value)
                                nameInput.value = ""
                                priceInput.value = ""
                            }
                        }}
                        sx={{
                            fontSize: "12px",
                            color: "#0F7DC1",
                            cursor: "pointer",
                            fontWeight: 500,
                            mt: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <AddIcon fontSize="small" /> Add Quantity
                    </Typography>
                </Box>
                {/* Medical Information section */}
                <Typography sx={sectionHeaderStyle}>Medical Information</Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Precaution</Typography>
                    <Controller
                        name="precaution"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Enter precautions..."
                                sx={textareaStyle}
                            />
                        )}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Side Effects</Typography>
                    <Controller
                        name="sideEffects"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Enter side effects..."
                                sx={textareaStyle}
                            />
                        )}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Drug Interactions</Typography>
                    <Controller
                        name="drugInteractions"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Enter drug interactions..."
                                sx={textareaStyle}
                            />
                        )}
                    />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Typography sx={labelStyle}>Indications</Typography>
                    <Controller
                        name="indications"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Enter drug interactions..."
                                sx={textareaStyle}
                            />
                        )}
                    />
                </Box>

                <Box>
                    <Typography sx={labelStyle}>Stock*</Typography>
                    <Controller
                        name="stock"
                        control={control}
                        rules={{
                            required: "Stock is required",
                            min: {
                                value: 1,
                                message: "Stock must be at least 1",
                            },
                            valueAsNumber: true,
                        }}
                        render={({ field, fieldState }) => <TextField onChange={(e) => field.onChange(Number(e.target.value))} error={!!fieldState.error} type="number" {...field} fullWidth placeholder="10" sx={inputStyle} />}
                    />
                </Box>


                <AppSnackbar ref={snackbarRef} />
            </Box>
        </BaseModal>
    )
}
