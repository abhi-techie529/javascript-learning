// Given an object containing counts of both upvotes and downvotes , return what vote count should be displayed.This is calculated by subtracting the number of downcotes from upvotes.

const sampleData = { upvotes: 2 , downvotes:33};

const getVoteCount = (data) => {
    return data.upvotes - data.downvotes;
}

console.log(getVoteCount(sampleData));
