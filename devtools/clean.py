# import pandas as pd

# names = ["celine", "haven", "ryu", "elviora", "keana", "renata"]

# for n in names:
#     with open(f"c:/Users/user/projects/study-sprout/data/{n}.xlsx", "rb") as file:
#         df = pd.read_excel(file)
#         df.drop([0, 1], axis="index", inplace=True)

#         if "Unnamed: 0" in df.columns:
#             df.drop("Unnamed: 0", axis="columns", inplace=True)
#         print(df.iloc()[0:4])
#         df.to_excel(f"c:/Users/user/projects/study-sprout/cleandata/{n}.xlsx")
        
import pandas as pd
import json

names = ["celine", "haven", "ryu", "elviora", "keana", "renata"]
all_data = []

for n in names:
    with open(f"c:/Users/user/projects/study-sprout/data/{n}.json", "r") as file:
        data = json.load(file)
        all_data.extend(data)

# Create merged dataframe
merged_df = pd.DataFrame(all_data)

# Save merged data
merged_df.to_json("c:/Users/user/projects/study-sprout/data/merged_all.json", orient="records")


print(f"Total records merged: {len(merged_df)}")
print(merged_df.head())