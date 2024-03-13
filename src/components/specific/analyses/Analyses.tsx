
import React from "react";
import "./Analyse.scss";
import { Box, Button, Divider, Link, Paper, Stack, Typography } from "@mui/material";
import { client } from "@gradio/client";
import { useCallback, useState } from "react"

import FormRow from "src/components/common/formRow/FormRow";
import FormLabel from "src/components/common/formLabel/FormLabel";
import LoadingButton from '@mui/lab/LoadingButton';
import  { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface Result {
  type: string;
  time: Date;
  data: string[]; // Adjust the type of 'data' according to its actual type
  endpoint: string;
  fn_index: number;
  // Add other properties if necessary
}

export default function Analyse() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview,setPreview] = useState<string | ArrayBuffer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Result |undefined>(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    // Do something with the files
    const file = new FileReader();
    file.onload =function(){
      console.log('previeew',file.result);

      setPreview(file.result)
      console.log('typepreview',typeof(preview) );
   }
   file.readAsDataURL(acceptedFiles[0]);
  }, [])
  const {acceptedFiles,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  function handleCancel() {
    setSelectedFile(undefined);
    setPreview(null);
    setIsLoading(false);
    setResult(undefined);
    setError('');
    setLoading(false);
    
  }
  async function handleOnSubmit(e: React.SyntheticEvent) { 
    setLoading(true);
    console.log('loading',loading)
    e.preventDefault();
    if (typeof acceptedFiles === 'undefined' || acceptedFiles.length === 0) {
      setError("Selectionner une image pour l'analyse.");
      setLoading(false);
      console.log('loading',loading)

      return;
    }
    console.log('image', acceptedFiles);
    

    /* const formData = new FormData(event.target);
      method: 'POST',
      body: formData
    });
    const data = await response.json(); 
    console.log(data);*/
    setLoading(true);
    console.log('acceeptedFiles',acceptedFiles);
    console.log(acceptedFiles[0]);
    //console.log(acceptedFiles[0].blob());
    try {
      

      if (!preview) {
        setError("Please select an image file to analyze.");
        setLoading(false);
        return;
      }
      // Create a Gradio client instance
      const client_return = await client("https://nayyabzahra148-ai-skin-disease-detection.hf.space/", {hf_token : "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"});
      const app_info = await client_return.view_api();

console.log(app_info);
      // Read the selected file as a blob
     
      
        // Make the prediction using the "/predict" endpoint with the image blob
        const result :Result | unknown = await client_return.predict("/predict", [preview as string]);
        if (result && typeof result === 'object' && 'data' in result) {
          console.log('result', result.data);
         
            setResult(result as Result);

          // Assuming you want to set the data to state
      
          setIsLoading(false);
          setLoading(false);
      }
        
    
    } catch (err) {
      console.error("Error during analysis:", err);
      setError("An error occurred during analysis. Please try again later.");
      setIsLoading(false);
    }  

  }


  /* const handleAnalyze = async () => {
    if (!selectedFile) {
      setError("Please select an image file to analyze.");
      return;
    }

    setIsLoading(true);
    setError("");  /// Clear any previous errors

    try {
      // Create a Gradio client instance
      const client_return = await client("https://nayyabzahra148-ai-skin-disease-detection.hf.space/");

      // Read the selected file as a blob
      const reader = new FileReader();
      reader.onload = async (e) => {
        const exampleImage = await new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(e.target.result);
        });

        // Make the prediction using the "/predict" endpoint with the image blob
        const result = await client_return.predict("/predict", exampleImage);

        setResult(result: any);
        setIsLoading(false);
      };
      reader.readAsArrayBuffer(selectedFile);
    } catch (err) {
      console.error("Error during analysis:", err);
      setError("An error occurred during analysis. Please try again later.");
      setIsLoading(false);
    }  
  }; */

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Typography sx={{my:2}}>ANALYSE</Typography>
     <Grid container spacing={2}>
     <Grid item xs={6} md={7}>
     <Box className="upload-image">
       <form>
      <FormRow className="upload-image">
       <FormLabel htmlFor="message">Image</FormLabel>
       {
          preview ? <p className="mb-5">
          <img className="image-preview w-52 h-auto shadow-lg dark:shadow-black/30" src={preview as string} alt="Upload preview" />
        </p> : <div className="m-auto" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <Box
        height={"100px"}
       
        sx={{ border: "2px dashed #0070ff3b", borderRadius: "10px",mb:2}}
        className="flex justify-center flex-col items-center absolute  bg-zinc-600"
    >
        <CloudUploadIcon fontSize="large" />
        <Typography>Déposez votre fichier ici</Typography>
    </Box> :
           <Box
           height="150px"
           
           sx={{border: "2px dashed #8484843b", borderRadius: "10px",mb:2}}
           className="flex justify-center flex-col items-center absolute  bg-zinc-600" 
       >
           <CloudUploadIcon fontSize="large" />
           <Typography>Glissez ou Cliquez ici pour déposer votre fichier </Typography>
       </Box>
      }
    </div>
       }
      
       {/*  <Input type="file" id="file" name="image" onChange={handleOnChange} className="file" /> */}
    
  

      </FormRow>
      <Stack direction="row"  justifyContent="center" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
       <Button variant="contained" onClick={handleCancel} disabled={isLoading} >Annuler</Button>
       <LoadingButton
    color="primary"
        onClick={handleOnSubmit}
        loading={loading}
        loadingPosition="start"
        startIcon={<SmartToyIcon />}
        variant="contained"
      >
       {loading ? "En cours..." : "Analyser"}
      </LoadingButton>
      </Stack>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        // Display the analysis result based on the model's response (replace with your UI logic)
        <Typography>Analyse reussie</Typography>
      )}

      </Box>
      
        </Grid>
<Divider orientation="vertical" variant="middle" flexItem/>
        <Grid item xs={6} md={4}>
          <Box>
          <Typography variant="h5" gutterBottom>
                Bienvenue dans l'analyse de peau
              </Typography>
            <Paper elevation={3} sx={{p:2,width:"100%"}}>
            <Stack>
              <Typography variant="h6" gutterBottom>
                Maladie
              </Typography>
              <Typography variant="body1" gutterBottom>
                {result?.data[0]}
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" gutterBottom>
              {result?.data[1]}
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
               Symptomes.
              </Typography>
              <Typography variant="body1" gutterBottom>
              {result?.data[2]}
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
               Causes
              </Typography>
              <Typography variant="body1" gutterBottom>
              {result?.data[3]}
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
                Traitement
              </Typography>
              <Typography variant="body1" gutterBottom>
              <Link href={result?.data[4]} variant="body2">{result?.data[4]}</Link>
              </Typography>
            </Stack>
            </Paper>
            </Box>
        </Grid>
     </Grid>
   
    </Box>
  );
}
