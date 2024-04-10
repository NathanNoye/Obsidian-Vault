### Utilities
- Used to get into colour grading faster
- BRAW to WideGammut should be the first node to use to setup the correct colour space
- WideGammut to REC.709 is typically your final node (unless you add one of my film luts)
- You'll do all your colour grading between these two nodes.
- Additional utility nodes will be added (X to WideGammut)

> [!info]
> **These are the CST transforms for the BRAW to WideGammut:**
> - Colour space: Davinci Wide Gammut
> - Gamma: Davinci Intermediate

### Looks
- Converts Rec709 to a certain look. Original use was to convert Rec709 to Kodak 2382
### In Camera Luts
- Converts BRAW to Rec 709 (some with film looks)
- Great for quickly testing final looks for really quick grades