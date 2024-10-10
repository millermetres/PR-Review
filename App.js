import { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, ActivityIndicator, View } from 'react-native';

// or any files within the Snack
import HeaderOrFooter from './components/HeaderOrFooter';
import Cat from './components/Cat';

const CATS = [{
    "breeds": [
      {
        "weight": {
          "imperial": "8 - 18",
          "metric": "4 - 8"
        },
        "id": "bslo",
        "name": "British Longhair",
        "temperament": "Affectionate, Easy Going, Independent, Intelligent, Loyal, Social",
        "origin": "United Kingdom",
        "country_codes": "GB",
        "country_code": "GB",
        "description": "The British Longhair is a very laid-back relaxed cat, often perceived to be very independent although they will enjoy the company of an equally relaxed and likeminded cat. They are an affectionate breed, but very much on their own terms and tend to prefer to choose to come and sit with their owners rather than being picked up.",
        "life_span": "12 - 14",
        "indoor": 0,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 4,
        "grooming": 5,
        "health_issues": 1,
        "intelligence": 5,
        "shedding_level": 1,
        "social_needs": 3,
        "stranger_friendly": 4,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/British_Longhair",
        "hypoallergenic": 0,
        "reference_image_id": "7isAO4Cav"
      }
    ],
    "id": "YZGOUtRQ1",
    "url": "https://cdn2.thecatapi.com/images/YZGOUtRQ1.jpg",
    "width": 1920,
    "height": 1281
  },
  {
    "breeds": [
      {
        "weight": {
          "imperial": "7 - 14",
          "metric": "3 - 6"
        },
        "id": "esho",
        "name": "Exotic Shorthair",
        "cfa_url": "http://cfa.org/Breeds/BreedsCJ/Exotic.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/exotic-shorthair",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/exotic-shorthair",
        "temperament": "Affectionate, Sweet, Loyal, Quiet, Peaceful",
        "origin": "United States",
        "country_codes": "US",
        "country_code": "US",
        "description": "The Exotic Shorthair is a gentle friendly cat that has the same personality as the Persian. They love having fun, don’t mind the company of other cats and dogs, also love to curl up for a sleep in a safe place. Exotics love their own people, but around strangers they are cautious at first. Given time, they usually warm up to visitors.",
        "life_span": "12 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "Exotic",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 3,
        "dog_friendly": 3,
        "energy_level": 3,
        "grooming": 2,
        "health_issues": 3,
        "intelligence": 3,
        "shedding_level": 2,
        "social_needs": 4,
        "stranger_friendly": 2,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Exotic_Shorthair",
        "hypoallergenic": 0,
        "reference_image_id": "YnPrYEmfe"
      }
    ],
    "id": "ixXGyLmIW",
    "url": "https://cdn2.thecatapi.com/images/ixXGyLmIW.jpg",
    "width": 2500,
    "height": 1494
  },
  {
    "breeds": [
      {
        "weight": {
          "imperial": "5 - 10",
          "metric": "2 - 5"
        },
        "id": "jbob",
        "name": "Japanese Bobtail",
        "cfa_url": "http://cfa.org/Breeds/BreedsCJ/JapaneseBobtail.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/japanese-bobtail",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/japanese-bobtail",
        "temperament": "Active, Agile, Clever, Easy Going, Intelligent, Lively, Loyal, Playful, Social",
        "origin": "Japan",
        "country_codes": "JP",
        "country_code": "JP",
        "description": "The Japanese Bobtail is an active, sweet, loving and highly intelligent breed. They love to be with people and play seemingly endlessly. They learn their name and respond to it. They bring toys to people and play fetch with a favorite toy for hours. Bobtails are social and are at their best when in the company of people. They take over the house and are not intimidated. If a dog is in the house, Bobtails assume Bobtails are in charge.",
        "life_span": "14 - 16",
        "indoor": 0,
        "lap": 1,
        "alt_names": "Japanese Truncated Cat",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 5,
        "grooming": 1,
        "health_issues": 1,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 5,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 1,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Japanese_Bobtail",
        "hypoallergenic": 0,
        "reference_image_id": "-tm9-znzl"
      }
    ],
    "id": "-tm9-znzl",
    "url": "https://cdn2.thecatapi.com/images/-tm9-znzl.jpg",
    "width": 1125,
    "height": 750
  }];

const CAT_API =
  'live_dDclYlpIM1CGD8edz5tgRpXkJCi79AsqEU6bRNIlRKooLZPpNM7rjF6SvgvtMWnA';

export default function App() {
  const [cats, setCats] = useState(CATS);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchCats = async () => {
  //   setIsLoading(true);
  //   const resp = await fetch(
  //     'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=' +
  //       CAT_API
  //   );

  //   const cats = await resp.json();
  //   setCats(cats);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchCats();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <HeaderOrFooter isHeader />
            <ScrollView>
            {cats.map(cat => <Cat image={cat.url} breed={cat.breeds[0].name} />)}
          </ScrollView>
          <HeaderOrFooter />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
});
