const population = 38000000;

    const country1 = 'GB';
    const population_in_mln1 = 58;
    const isIsland1 = true 
    const islanguageEng1 = true;

    const country2 = 'Ireland';
    const islanguageEng2 = true;
    const isIsland2 = true;
    const population_in_mln2 = 25;

    const country3 = 'Canada';
    const population_in_mln3 = 30;
    const isIsland3 = false;
    const islanguageEng3 = true;

    if (islanguageEng1 == true) {
         if (population_in_mln1 < 50) {
            if (isIsland1 == false) {
                console.log(`GB is right for you`);
           }
        }
    }

    if (islanguageEng2 == true) {
        if (population_in_mln2 < 50) {
            if (isIsland2 == false) {
                console.log(`Ireland is right for you`);
            }
        }
    }

    if (islanguageEng3 == true) {
        if (population_in_mln3 < 50) {
            if (isIsland3 == false) {
                console.log(`Canada is right for you`);
             }
        }
    }
