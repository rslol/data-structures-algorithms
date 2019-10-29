Quick sort, like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (the "Pivot") and finding the index where the pivot should end up in the sorted array
Once the pivor is positioned appropriately, quick sort can be applied on either side of the pivot
Recursively repeat the process till the array is sorted 

In order to implement quick sory, first implement a function that rearranges elements in an array on either side of a pivot
Given an array, this helper function should designate an element as the pivot 
It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
