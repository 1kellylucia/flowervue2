# Assignment 2 - Vue app - Automated development process.

Name: FlowerStoreVue

Student No.:  20082474

## Overview.
a website for online flower store.
1. login functions for administrator to login (username:admin@123.com password:123456)
 (also have google login apis and facebook login apis)
   logout
2. check the flowers(you can add the likes of the flower supply and delete or edit it (reuse the addflower's form))
3. add one flowers for what you have .
4. maps api
## E2E Testing.
     $ npx cypress run --spec cypress/integration/home.spec.js
     $ npx cypress run --spec cypress/integration/addflowers.spec.js
     $ npx cypress run --spec cypress/integration/manageflower.spec.js  [might be the most important
     

────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running: examples/addflowers.spec.js...                                                  (1 of 3) 


  floweradd page
    ✓ allows a flower to be edited (17617ms)
    ✓ shows error messages for incomplete form fields (8006ms)


  2 passing (26s)


  (Results)

  ┌───────────────────────────────────────────┐
  │ Tests:        2                           │
  │ Passing:      2                           │
  │ Failing:      0                           │
  │ Pending:      0                           │
  │ Skipped:      0                           │
  │ Screenshots:  0                           │
  │ Video:        true                        │
  │ Duration:     25 seconds                  │
  │ Spec Ran:     examples/addflowers.spec.js │
  └───────────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/liangdongbing/Desktop/flowerstorevue/cypress/videos/examples/addflowers.spec.js.mp4 (10 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    

## Continuous Integration.

https://travis-ci.org/1kellylucia/flowervue2

## Automated Deployment.


http://flowerstore.surge.sh/

## Extra features.

bitbucket reposity:https://bitbucket.org/kellylucia1/flowervuetest/src/master/

## Appendix.
 
     check the material design and use https://material.io/tools/color/#!/?view.left=0&view.right=0
     to update the color
     $ npx cypress run 
     
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    3.1.3                                                                              │
  │ Browser:    Electron 59 (headless)                                                             │
  │ Specs:      3 found (examples/addflowers.spec.js, examples/home.spec.js, examples/manageflowe… │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running: examples/addflowers.spec.js...                                                  (1 of 3) 


  floweradd page
    ✓ allows a flower to be edited (14282ms)
    ✓ shows error messages for incomplete form fields (9390ms)


  2 passing (25s)


  (Results)

  ┌───────────────────────────────────────────┐
  │ Tests:        2                           │
  │ Passing:      2                           │
  │ Failing:      0                           │
  │ Pending:      0                           │
  │ Skipped:      0                           │
  │ Screenshots:  0                           │
  │ Video:        true                        │
  │ Duration:     24 seconds                  │
  │ Spec Ran:     examples/addflowers.spec.js │
  └───────────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/liangdongbing/Desktop/flowerstorevue/cypress/videos/examples/addflowers.spec.js.mp4 (7 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running: examples/home.spec.js...                                                        (2 of 3) 


  Home page
    ✓ Shows a header (59615ms)
    Navigation bar
      ✓ Shows the required links (6644ms)
      ✓ Redirects when links are clicked (13317ms)


  3 passing (1m)


  (Results)

  ┌─────────────────────────────────────┐
  │ Tests:        3                     │
  │ Passing:      3                     │
  │ Failing:      0                     │
  │ Pending:      0                     │
  │ Skipped:      0                     │
  │ Screenshots:  0                     │
  │ Video:        true                  │
  │ Duration:     1 minute, 19 seconds  │
  │ Spec Ran:     examples/home.spec.js │
  └─────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  39%
  - Compression progress:  77%
  - Finished processing:  /Users/liangdongbing/Desktop/flowerstorevue/cypress/videos/examples/home.spec.js.mp4 (25 seconds)


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running: examples/manageflower.spec.js...                                                (3 of 3) 


  Manage Flowers page
    ✓ allows a flower to be liked (62885ms)
    ✓ allows a flower to be deleted (26207ms)
    ✓ allows a flower to be edited (14357ms)
    ✓ shows error messages for incomplete form fields (17653ms)


  4 passing (2m)


  (Results)

  ┌─────────────────────────────────────────────┐
  │ Tests:        4                             │
  │ Passing:      4                             │
  │ Failing:      0                             │
  │ Pending:      0                             │
  │ Skipped:      0                             │
  │ Screenshots:  0                             │
  │ Video:        true                          │
  │ Duration:     2 minutes, 1 second           │
  │ Spec Ran:     examples/manageflower.spec.js │
  └─────────────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  14%
  - Compression progress:  59%
  - Compression progress:  88%
  - Finished processing:  /Users/liangdongbing/Desktop/flowerstorevue/cypress/videos/examples/manageflower.spec.js.mp4 (35 seconds)


====================================================================================================

  (Run Finished)


      Spec                                                Tests  Passing  Failing  Pending  Skipped 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ examples/addflowers.spec.js               00:24        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ examples/home.spec.js                     01:19        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ examples/manageflower.spec.js             02:01        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           03:45        9        9        -        -        -  
 ## git youtube link and github
 code:https://youtu.be/mfziGrJFu1Q
 vue:https://youtu.be/6XexMGKMQOc
 API:https://github.com/1kellylucia/flowervuetest
 SPA:https://github.com/1kellylucia/flowervue2
