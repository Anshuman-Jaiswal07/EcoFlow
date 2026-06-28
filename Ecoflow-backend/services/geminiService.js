import  {GoogleGenerativeAI}  from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Ensure the Google Gen AI core engine has an authorized access token key
const ai = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

/**
 * Converts a standard Node.js file buffer array into the format required by the Google Gen AI SDK.
 * @param {Buffer} buffer - The raw uploaded image file buffer.
 * @param {string} mimeType - The file type (e.g., 'image/jpeg', 'image/png').
 * @returns {Object} Structured data object for the Gemini API model payload.
 */
const fileToGenerativePart = (buffer, mimeType) => {
  return {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType
    },
  };
};

/**
 * Analyzes an industrial or construction waste image using Gemini 1.5 Flash.
 * It determines categorization, estimates mass volumes, and builds impact metrics.
 * * @param {Buffer} imageBuffer - Raw binary frame buffer from Multer memory storage.
 * @param {string} mimeType - Image format type specification.
 * @returns {Promise<Object>} Formatted analytical data profile tracking asset structures.
 */
export const analyzeResourceVision = async (imageBuffer, mimeType) => {
  try {
    if (!ai) {
      throw new Error("Initialization Fault: GEMINI_API_KEY environment variable is missing.");
    }

    // Leverage gemini-1.5-flash for real-time multimodal image processing speeds
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imagePart = fileToGenerativePart(imageBuffer, mimeType);

    // Prompt engineering targeting absolute structural JSON extraction blocks
    const prompt = `
      You are an expert environmental engineering system and industrial symbiosis model auditor.
      Analyze this image showing construction, demolition, business, or industrial waste material scraps.
      
      Extract and calculate the following details accurately based on visual markers:
      1. Material Identification (Clear, concise title).
      2. Reusable Category Loop (Must map EXACTLY to one of these: 'Solids', 'Liquids', 'Energy', 'Organics').
      3. Quantity/Volume Estimation (Provide an estimated weight payload with units, e.g., '2.4 Tons', '850 Kg').
      4. Carbon Impact Estimate (State estimated metric CO2 offset generated if diverted from landfill, e.g., 'Est. 1.2 MT CO2 Offset').
      5. AI Recommendation Text (A strategic, business-oriented 2-sentence description detailing how a local builder, upcycling hub, or community network can immediately reuse or repurpose this specific asset).
      6. Confidence Score (A value between 0.0 and 1.0 indicating your tracking measurement accuracy).

      Return the result strictly as a clean JSON object. Do not wrap the JSON in Markdown styling block code fences (such as \`\`\`json).
      Use this exact JSON structure layout schema:
      {
        "title": "Detected Material Name",
        "category": "Solids",
        "quantity": "Estimation String",
        "carbonImpact": "Offset Metrics String",
        "recommendationText": "Strategic matching blueprint statement.",
        "confidence": 0.95
      }
    `;

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text().trim();

    // Parse the returned text stream directly into a JavaScript runtime object array
    const parsedData = JSON.parse(text);
    return parsedData;

  } catch (error) {
    console.error("💥 Critical Gemini Service Exception Loop triggered:", error.message);
    
    // Fallback safe payload object array if API rate limits or network handshakes drop out
    return {
      title: "Mixed Industrial Processing Scraps",
      category: "Solids",
      quantity: "1.5 Tons Base Line",
      carbonImpact: "Est. 0.6 MT CO2 Offset",
      recommendationText: "Ecosystem asset scan failed over network layers. Retain for standard local structural fill sorting.",
      confidence: 0.50
    };
  }
};

/**
 * Dynamically computes matching recommendation connections between a newly updated asset node
 * and nearby manufacturing grids or city construction hubs.
 * * @param {Object} resource - The newly populated Mongoose Resource document array data.
 * @returns {Promise<Array>} List of instant match blueprints ready for database ingestion loops.
 */
export const generateEcosystemLoops = async (resource) => {
  try {
    if (!ai) return [];

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Given this newly logged waste resource:
      Title: "${resource.title}"
      Category: "${resource.category}"
      Quantity Available: "${resource.quantity}"
      Location Base: "${resource.location}"

      Generate a strategic, optimized hyper-local B2B asset match option to connect this with an adjacent industrial consumer.
      Provide the response strictly as a clean JSON array containing one element matching this structure:
      [{
        "type": "Instant Match",
        "primaryText": "An actionable logistical connection statement instructing who should pick this up (e.g., nearby concrete plant, biofuel developer, or infrastructure project) and why.",
        "impact": "A precise financial/environmental saving calculation metric statement (e.g., Saves $X in raw material procurement and diverts Y volume from city waste management handling)."
      }]
    `;

    const result = await model.generateContent(prompt);
    const text = (await result.response).text().trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Ecosystem Recommendation Sync Fault:", error.message);
    return [{
      type: "Instant Match",
      primaryText: `Route payload assets [${resource.title}] directly to local circular project vectors within a 5km radius grid.`,
      impact: `Diverts ${resource.quantity} from standard city landfills, trimming logistical overhead expenses.`
    }];
  }
};